import React, { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import atomize from '@quarkly/atomize';
import styles, { css } from 'styled-components';
import isEmptyChildren from './IsEmptyChildren';
import presets from './AnimationPresets';
import ComponentNotice from './ComponentNotice';

const getAnimationStyle = ({
	animation,
	timingFunction,
	duration,
	delay,
	iteration
}) => {
	return css`
        ${presets[animation].keyframes} ${duration} ${timingFunction || presets[animation].timingFunction} ${delay} ${iteration === 'infinite' && 'infinite'} normal forwards
    `;
};

const getParams = (e, currentElement) => {
	const currentTarget = e ? e.currentTarget : window;
	const windowHeight = currentTarget.innerHeight;
	const componentRect = currentElement.getBoundingClientRect();
	const scrollBottom = currentElement.previousTop > componentRect.top;
	return {
		windowHeight,
		componentRect,
		scrollBottom
	};
};

const Wrapper = atomize.div();
const Content = styles.div`
  animation: ${getAnimationStyle};
`;

const Animation = ({
	trigger,
	animation,
	iteration,
	timingFunction,
	duration,
	delay,
	test,
	children,
	...props
}) => {
	const [isPlay, togglePlay] = useState(trigger === 'onload' || test);
	const wrapperRef = useRef({});
	const onEnterEvent = useMemo(() => trigger === 'hover' ? () => togglePlay(true) : undefined, [trigger]);
	const onLeaveEvent = useMemo(() => trigger === 'hover' ? () => togglePlay(false) : undefined, [trigger]);
	const onClickEvent = useCallback(() => trigger === 'click' && togglePlay(!isPlay), [trigger, isPlay]);
	const isEmpty = useMemo(() => isEmptyChildren(children), [children]);

	const onAboveEvent = e => {
		if (!wrapperRef.current) return;
		const {
			componentRect,
			scrollBottom
		} = getParams(e, wrapperRef.current);

		if (!wrapperRef.current.trigered && !scrollBottom && componentRect.top + componentRect.height >= 0 && wrapperRef.current.previousTop + componentRect.height < 0) {
			wrapperRef.current.trigered = true;
			togglePlay(true);
		}

		wrapperRef.current.previousTop = componentRect.top;
	};

	const onBelowEvent = e => {
		if (!wrapperRef.current) return;
		const {
			windowHeight,
			componentRect,
			scrollBottom
		} = getParams(e, wrapperRef.current);

		if (!wrapperRef.current.trigered && scrollBottom && componentRect.top <= windowHeight) {
			wrapperRef.current.trigered = true;
			togglePlay(true);
		}

		wrapperRef.current.previousTop = componentRect.top;
	};

	useEffect(() => {
		if (!wrapperRef.current) return;
		const {
			windowHeight,
			componentRect
		} = getParams(null, wrapperRef.current);
		const inViewport = componentRect.top >= 0 && componentRect.top <= windowHeight;

		if (!inViewport) {
			wrapperRef.current.previousTop = componentRect.top;

			if (trigger === 'above') {
				window.addEventListener('scroll', onAboveEvent);
			} else if (trigger === 'below') {
				window.addEventListener('scroll', onBelowEvent);
			}
		}

		return function cleanup() {
			window.removeEventListener('scroll', onAboveEvent);
			window.removeEventListener('scroll', onBelowEvent);
		};
	}, [wrapperRef.current, trigger]);
	useEffect(() => {
		if (!wrapperRef.current) return;
		wrapperRef.current.trigered = test;
		togglePlay(test);
	}, [trigger, animation, iteration, duration, delay, test]);
	return <Wrapper
		ref={wrapperRef}
		onMouseEnter={onEnterEvent}
		onMouseLeave={onLeaveEvent}
		onClick={onClickEvent}
		{...props}
	>
		            
		<Content
			animation={isPlay ? animation : 'none'}
			iteration={iteration}
			timingFunction={timingFunction}
			duration={duration}
			delay={delay}
		>
			                
			{children}
			            
		</Content>
		            
		{isEmpty && <ComponentNotice message="Add child component to make animation work" />}
		        
	</Wrapper>;
};

const propInfo = {
	trigger: {
		title: {
			en: 'Animation trigger',
			ru: '?????????????? ????????????????'
		},
		control: 'select',
		variants: [{
			title: {
				en: 'When loading',
				ru: '?????? ????????????????'
			},
			value: 'onload'
		}, {
			title: {
				en: 'On click',
				ru: '???? ??????????'
			},
			value: 'click'
		}, {
			title: {
				en: 'On hover',
				ru: '???? ??????????????????'
			},
			value: 'hover'
		}, {
			title: {
				en: 'From top',
				ru: '?????????????????? ????????????'
			},
			value: 'above'
		}, {
			title: {
				en: 'From bottom',
				ru: '?????????????????? ??????????'
			},
			value: 'below'
		}],
		category: 'Animation',
		weight: 1
	},
	animation: {
		title: {
			en: 'Animation type',
			ru: '?????? ????????????????'
		},
		control: 'select',
		variants: [{
			label: {
				en: 'Appear & Disappear',
				ru: '?????????????????? ?? ??????????????'
			},
			options: ['Fade In', 'Fade Out', 'Flip In', 'Flip Out', 'Grow In', 'Grow Out', 'Shrink In', 'Shrink Out', 'Spin In', 'Spin Out', 'Fly In', 'Fly Out', 'Drop In', 'Drop Out']
		}, {
			label: {
				en: 'Slide',
				ru: '??????????????????????'
			},
			options: ['??? Slide In', '??? Slide In', '??? Slide In', '??? Slide In', '??? Slide Out', '??? Slide Out', '??? Slide Out', '??? Slide Out']
		}, {
			label: {
				en: 'Emphasis',
				ru: '????????????'
			},
			options: ['Pop', 'Juggle', 'Blink', 'Bounce', 'Jello', 'Rubber']
		}, {
			label: {
				en: 'Continuous',
				ru: '??????????????????????'
			},
			options: ['Rotate', 'Vibrate 1', 'Vibrate 2', 'Flicker', 'Shake', 'Ping', 'Beat']
		}],
		category: 'Animation',
		weight: 0.5
	},
	iteration: {
		title: {
			en: 'Number of iterations',
			ru: '???????????????????? ????????????????'
		},
		control: 'radio-group',
		variants: [{
			title: {
				en: 'Once',
				ru: '???????? ??????'
			},
			value: 'once'
		}, {
			title: {
				en: 'Loop',
				ru: '????????????????????'
			},
			value: 'infinite'
		}],
		category: 'Animation',
		weight: 0.5
	},
	timingFunction: {
		title: {
			en: 'Animation timing function',
			ru: '?????????????? ?????????????????????? ????????????????'
		},
		control: 'input',
		variants: ['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out', 'step-start', 'step-end'],
		category: 'Animation',
		weight: 1
	},
	duration: {
		title: {
			en: 'Duration of show/hide',
			ru: '???????????????????????? ?????????????????? ?? ??????????????'
		},
		control: 'input',
		variants: ['0s', '0.1s', '0.2s', '0.3s', '0.5s', '1s'],
		category: 'Animation',
		weight: 1
	},
	delay: {
		title: {
			en: 'Delay before animation starts',
			ru: '???????????????? ?????????? ?????????????? ????????????????'
		},
		control: 'input',
		variants: ['0s', '0.1s', '0.2s', '0.3s', '0.5s', '1s'],
		category: 'Animation',
		weight: 1
	},
	test: {
		title: {
			en: 'Force animation',
			ru: '???????????????? ???????????????? ??????????????????????????'
		},
		control: 'checkbox',
		category: 'Test',
		weight: 1
	}
};
const defaultProps = {
	trigger: 'onload',
	animation: 'Fade Out',
	iteration: 'infinite',
	timingFunction: 'linear',
	duration: '1s',
	delay: '0s'
};
Object.assign(Animation, {
	title: 'Animation',
	description: {
		en: 'Use this component to animate one or several elements',
		ru: '?????????????????? ?????? ???????????????????????? ???????????? ?????? ???????????????????? ??????????????????'
	},
	propInfo,
	defaultProps
});
export default Animation;