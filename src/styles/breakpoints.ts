const breakpoints = [320, 480, 768, 960, 1240];

export const mq = breakpoints.map(
  breakpoint => `@media (min-width: ${breakpoint}px)`
)
