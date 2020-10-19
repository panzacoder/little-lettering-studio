import React from 'react'
import PropTypes from 'prop-types'
import IG from '../../svg/instagram.svg'

const Instagram = ({ className }) => (
  <a
    href="https://www.instagram.com/littleletteringstudio"
    className={`transform hover:scale-110 ${className}`}
  >
    <IG className="w-full" fill="white" alt="instagram" />
  </a>
)

Instagram.propTypes = {
  className: PropTypes.string,
}

export default Instagram
