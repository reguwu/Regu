import React from 'react'
import { socialMedias } from '@/data'
import Icon from '@/components/Icon'
import styles from '@/styles/SocialMediaList.module.css'
import Link from 'next/link';
import { capitalizeFirstLetter } from '@/helpers/string';

const SocialMediaList = () => {
  return (
    <div className={styles['social-icons']}>
      {socialMedias.map(({name, url}, index) => 
      name !== "" ?
      <Link key={name} className={styles['clickable']} href={url} target="_blank" rel="noopener noreferrer">
        <Icon name={name} size={60} />
        <div>{capitalizeFirstLetter(name)}</div>
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