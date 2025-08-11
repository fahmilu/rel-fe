'use client';
import React from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

const Quote = ({ data }) => {
    const { t } = useTranslation();

  return (
    <section className="home__quote">
        <div className="container">
            <div className="home__quote__content">
                <h2 className="text-white">{t(data.title)}</h2>
                <h3 className="text-white">{t(data.subtitle)}</h3>
            </div>
            <div className="home__quote__links">
                <Link href={data.button.link} className="btn btn__primary">{t(data.button.label)}</Link>
            </div>
        </div>
    </section>
  )
}

export default Quote