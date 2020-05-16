import React from 'react'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 600,
    margin: '0 auto',
  },
})

export default function Types() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography variant="h1" component="h2" gutterBottom>
        h1. Heading (96px)
      </Typography>
      <Typography variant="h2" gutterBottom>
        h2. Heading (60px)
      </Typography>
      <Typography variant="h3" gutterBottom>
        h3. Heading (48px)
      </Typography>
      <Typography variant="h4" gutterBottom>
        h4. Heading (32px)
      </Typography>
      <Typography variant="h5" gutterBottom>
        h5. Heading (24px)
      </Typography>
      <Typography variant="h6" gutterBottom>
        h6. Heading (20px)
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1 (16px). Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2" gutterBottom>
        body2 (14px). Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="button" display="block" gutterBottom>
        button text
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        caption text
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        overline text
      </Typography>

      <Divider />
      <Typography variant="h2" gutterBottom>
        Playfair Display
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        style={{ fontFamily: 'Playfair Display', fontWeight: 100 }}
      >
        100. Font Weight
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        style={{ fontFamily: 'Playfair Display', fontWeight: 200 }}
      >
        200. Font Weight
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        style={{ fontFamily: 'Playfair Display', fontWeight: 300 }}
      >
        300. Font Weight
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        style={{ fontFamily: 'Playfair Display', fontWeight: 400 }}
      >
        400. Font Weight
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        style={{ fontFamily: 'Playfair Display', fontWeight: 500 }}
      >
        500. Font Weight
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        style={{ fontFamily: 'Playfair Display', fontWeight: 600 }}
      >
        600. Font Weight
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        style={{ fontFamily: 'Playfair Display', fontWeight: 700 }}
      >
        700. Font Weight
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        style={{ fontFamily: 'Playfair Display', fontWeight: 800 }}
      >
        800. Font Weight
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        style={{ fontFamily: 'Playfair Display', fontWeight: 900 }}
      >
        900. Font Weight
      </Typography>

      <Divider />
      <Typography variant="h2" gutterBottom style={{ fontFamily: 'Open Sans' }}>
        Open Sans
      </Typography>
      <Typography variant="body1" gutterBottom style={{ fontWeight: 100 }}>
        100. Font Weight
      </Typography>
      <Typography variant="body1" gutterBottom style={{ fontWeight: 200 }}>
        200. Font Weight
      </Typography>
      <Typography variant="body1" gutterBottom style={{ fontWeight: 300 }}>
        300. Font Weight
      </Typography>
      <Typography variant="body1" gutterBottom style={{ fontWeight: 400 }}>
        400. Font Weight
      </Typography>
      <Typography variant="body1" gutterBottom style={{ fontWeight: 500 }}>
        500. Font Weight
      </Typography>
      <Typography variant="body1" gutterBottom style={{ fontWeight: 600 }}>
        600. Font Weight
      </Typography>
      <Typography variant="body1" gutterBottom style={{ fontWeight: 700 }}>
        700. Font Weight
      </Typography>
      <Typography variant="body1" gutterBottom style={{ fontWeight: 800 }}>
        800. Font Weight
      </Typography>
      <Typography variant="body1" gutterBottom style={{ fontWeight: 900 }}>
        900. Font Weight
      </Typography>
    </div>
  )
}
