import React from 'react'
import { SOCIAL_MEDIAS } from '@/utils/constant'
import Icon from '@/components/content/Icon'
import styles from '@/styles/SocialMediaList.module.css'

const SocialMediaList = () => {
  return (
    <div className={styles['social-icons']}>
      {SOCIAL_MEDIAS.map(({name, url}, index) => 
      name !== "" ?
      <a key={name} className={styles['clickable']} href={url} target="_blank" rel="noopener noreferrer">
        <Icon name={name.toLowerCase()} size={60} />
        <div>{name}</div>
      </a>
      :
      <div key={index}>
        <Icon name={name} size={60} />
      </div>
    )}
    </div>
  )
}

export default SocialMediaList