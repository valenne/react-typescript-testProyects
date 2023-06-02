import { style } from '@vanilla-extract/css'

export const infinityButton = style({
  display: 'flex',
  placeItems: 'center',
  margin: 'auto',
  marginBottom: '32px',
  backgroundColor: '#f60',
  padding: '8px 12px',
  border: '1px solid black',
  transition: 'all 0.4s ease',
  borderRadius: '10px',
  fontSize: '16px',
  boxShadow: '0px 8px 15px -3px rgba(0,0,0,0.4)',
  ':hover': {
    backgroundColor: '#222',
    color: 'white',
    translate: '-5px 0px'

  }
})
