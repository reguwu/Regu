import React from 'react'
import { socialMedias } from '@/utils/constant/socialMedias'
import Icon from '@/components/content/Icon'
import styles from '@/styles/SocialMediaList.module.css'
import Link from 'next/link';

const SocialMediaList = () => {
  return (
    <div className={styles['social-icons']}>
      {socialMedias.map(({name, url}, index) => 
      name !== "" ?
      <Link key={name} className={styles['clickable']} href={url} target="_blank" rel="noopener noreferrer">
        <Icon name={name.toLowerCase()} size={60} />
        <div>{name}</div>
      </Link>
      :
      <div key={index}>
        <Icon name={name} size={60} />
      </div>
    )}
    </div>
  )
}

export default SocialMediaList