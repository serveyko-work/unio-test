import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './Select.module.scss';
import cn from 'classnames';
import IconArrow from '../Icons/IconArrow';

interface Props {
  options: Array<string | JSX.Element>,
  name: string | JSX.Element,
  className?: string,
}

const Select: FC<Props> = ({options, name, className}): JSX.Element => {

  const [isSelect, setIsSelect] = useState<null | string | JSX.Element>(null);
  const [isShow, setIsShow] = useState<boolean>(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const changeShow = (): void => {
    setIsShow(prevState => !prevState)
  }

  const closeSelect = (): void => {
    setIsShow(false)
  }

  useEffect(() => {
    const handleMouseClick = (e: MouseEvent | Event): void => {
      // @ts-ignore
      if (!e.path?.includes(selectRef?.current)) {
        closeSelect();
      }
    }

    window.addEventListener('click', handleMouseClick);
    window.addEventListener('scroll', closeSelect);
    window.addEventListener('resize', closeSelect, true);
    return () => {
      window.removeEventListener('click', handleMouseClick);
      window.removeEventListener('scroll', closeSelect);
      window.removeEventListener('resize', closeSelect, true);
    }
  }, [])

  return (
    <div onClick={changeShow} ref={selectRef} className={cn(styles.select, className)}>
      <span>{isSelect || name}</span>
      <IconArrow/>
      <div className={cn(styles.options, {[styles.show]: isShow})}>
        {
          options.map((item: string | JSX.Element, index: number) =>
            <span onClick={() => {setIsSelect(item)}} className={styles.option} key={`${item}_${index}`}>{item}</span>
          )
        }
      </div>
    </div>
  );
};

export default Select;
