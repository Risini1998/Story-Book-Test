export const fontSources = ['Google Fonts']
export const fontStack = [
  {
    name: '"Anton", sans-serif',
    cssClass: 'text-serif',
    link: 'https://fonts.google.com/specimen/Anton'
  },
  {
    name: 'Roboto Flex',
    cssClass: 'text-sans',
    link: 'https://fonts.google.com/specimen/Roboto+Flex'
  },
  {
    name: 'Roboto Mono',
    cssClass: 'text-mono',
    link: 'https://fonts.google.com/specimen/Roboto+Mono'
  }
]
export const fontFamily = {
  roboto: ['Roboto', 'sans-serif'],
  serif: ['"Roboto Flex"', 'serif'],
  heading: ['"Roboto Flex"', 'sans-serif'],
  display: ['"Anton"', 'sans-serif'],
  mono: ['"Roboto Mono"', 'monospace'],
  code: ['"Roboto Mono"', 'monospace']
}

export const display = {
  fontFamily: ['"Anton", sans-serif'],

  fontSize: {
    'display-h1': [
      '46px',
      {
        label: 'Display H1',
        lineHeight: '56px',
        letterSpacing: '0.01em',
        fontWeight: '400'
      }
    ],
    'display-h2': [
      '40px',
      {
        label: 'Display H2',
        lineHeight: '48px',
        letterSpacing: '0.01em',
        fontWeight: '400'
      }
    ],
    'display-body': [
      '22px',
      {
        label: 'Display body',
        lineHeight: '24px',
        letterSpacing: '0.02em',
        fontWeight: '500'
      }
    ],
    'display-h1-m': [
      '32px',
      {
        label: 'Display H1 (Responsive)',
        lineHeight: '40px',
        letterSpacing: '0.03em',
        fontWeight: '400'
      }
    ],
    'display-h2-m': [
      '28px',
      {
        label: 'Display H2 (Responsive)',
        lineHeight: '36px',
        letterSpacing: '0.03em',
        fontWeight: '400'
      }
    ],
    'display-body-m': [
      '20px',
      {
        label: 'Display body',
        lineHeight: '24px',
        letterSpacing: '0.01em',
        fontWeight: '500'
      }
    ]
  }
}
export const headings = {
  fontFamily: ['"Roboto Flex", sans-serif'],

  fontSize: {
    h1: [
      '42px',
      {
        label: 'Heading 1',
        lineHeight: '56px',
        letterSpacing: '-0.02em',
        fontWeight: '700'
      }
    ],
    h2: [
      '33px',
      {
        label: 'Heading 2',
        lineHeight: '44px',
        letterSpacing: '-0.02em',
        fontWeight: '700'
      }
    ],
    h3: [
      '24px',
      {
        label: 'Heading 3',
        lineHeight: '32px',
        letterSpacing: '-0.02em',
        fontWeight: '600'
      }
    ],
    'h1-m': [
      '37px',
      {
        label: 'Heading 1 (Responsive)',
        lineHeight: '48px',
        letterSpacing: '-0.02em',
        fontWeight: '700'
      }
    ],
    'h2-m': [
      '28px',
      {
        label: 'Heading 2 (Responsive)',
        lineHeight: '32px',
        letterSpacing: '-0.02em',
        fontWeight: '700'
      }
    ],
    'h3-m': [
      '19px',
      {
        label: 'Heading 3 (Responsive)',
        lineHeight: '24px',
        letterSpacing: '-0.02em',
        fontWeight: '700'
      }
    ]
  }
}
export const body = {
  fontFamily: ['"Roboto Flex", sans-serif', '"Roboto Mono", monospace'],
  fontSize: {
    base: [
      '16px',
      {
        label: 'Base',
        lineHeight: '24px',
        fontWeight: '700'
      }
    ],
    sm: [
      '14px',
      {
        label: 'Small',
        lineHeight: '20px',
        fontWeight: '400'
      }
    ],
    xs: [
      '12px',
      {
        label: 'Extra-small',
        lineHeight: '16px',
        fontWeight: '500'
      }
    ],
    link: [
      '16px',
      {
        label: 'Link',
        lineHeight: '20px',
        fontWeight: '500'
      }
    ]
  }
}
