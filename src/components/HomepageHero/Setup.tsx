'use client'

import BaseLogo from '@/assets/images/Base_Symbol_Blue.svg'
import styles from '@/components/HomepageHero/SetupHero.module.css'
import { MotionWrapperFlash } from '@/components/MotionWrapper/Flash'
import { Button } from '@/components/ui/button'
import { FlipWords } from '@/components/ui/flip-words'
import { LinkPreview } from '@/components/ui/link-preview'
import { useLocale } from '@/hooks'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
}
export function SetupHero(props: Props) {
  const { t, currentLocale } = useLocale()

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.headline}>
          <MotionWrapperFlash
            disabledAnimation={false}
            className="flex items-center"
          >
            <Image src={BaseLogo} alt="Base Logo" width={100} height={100} />
          </MotionWrapperFlash>
          {' '}
          <span className="ml-2"></span>
          Base
          {' '}
          <br className="sm:hidden"></br>
          {' '}
          Nextra
          <br className="sm:hidden"></br>
          {' '}
          Example
        </h1>


        <div className={clsx([
          styles.subtitle,
          'text-neutral-500 dark:text-neutral-300',
        ])}
        >
          Nextra is
          {' '}
          <FlipWords
            words={[
              'Fast',
              'Based',
              'Modern',
              'Flexible',
              'Easy',
            ]}
          />
          <br />
          This is a POC and does not represent what the final product can look like.
          <br />
          Nextra is very rich framework and there is room for a lot of customization.
          <br />
          <br />
          Made with
          {' '}
          <LinkPreview
            url="https://nextjs.org"
          >
            Next.js
          </LinkPreview>
          ,
          {' '}
          <LinkPreview
            url="https://tailwindcss.com"
          >
            Tailwind CSS
          </LinkPreview>
          , and
          {' '}
          <LinkPreview
            url="https://ui.shadcn.com"
          >
            Shadcn UI
          </LinkPreview>
          {', '}
          <LinkPreview
            url="https://ui.aceternity.com"
          >
            Aceternity UI
          </LinkPreview>
        </div>
        <div className="flex justify-center pt-10">
          <div className="max-w-[500px] flex flex-wrap gap-[20px] max-sm:justify-center">
            <Button
              asChild
              size="lg"
              className="font-bold group max-sm:w-[100%]"
            >
              <Link
                href={`/${currentLocale}/introduction`}
              >
                {t('getStarted')}
                <span className="w-[20px] translate-x-[6px] transition-all group-hover:translate-x-[10px] icon-[mingcute--arrow-right-fill]"></span>
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="font-bold group max-sm:w-[100%]"
            >
              <Link
                href="https://github.com/youssefea/base-nextra-example"
                target="_blank"
              >
                Github
                <span className="ml-[6px] icon-[mingcute--github-line]"></span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
