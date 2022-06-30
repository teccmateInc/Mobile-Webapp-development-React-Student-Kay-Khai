import { Box, Card, Typography } from '@mui/material'
import React from 'react'

const ActivityCard = ({ImgSrc,activityName,sponserBy,sponserName}) => {
  return (
    <div style={{ padding: "2vmax 0" }}>
          <Card className="activitiesCard">
            <img src={ImgSrc} className="sliderImage" />
            <Typography
              variant="h4"
              className="activityType"
            >
              {activityName}
            </Typography>
            <Box className="sponserBox">

            <Typography className="sponsoredBy">
              {sponserBy}
            </Typography>
            <Typography className="sponserName">
              {sponserName}
            </Typography>
            </Box>
          </Card>
        </div>
  )
}

export default ActivityCard