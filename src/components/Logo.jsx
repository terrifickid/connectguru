import { useId } from 'react';
import clsx from 'clsx';

import logoImageLight from '../images/logo_w.png'; // Replace with your light logo image path
import logoImageDark from '../images/logo_b.png';   // Replace with your dark logo image path

export function Logomark({ invert = false, filled = false, ...props }) {
  let id = useId();

  const imagePath = invert ? logoImageDark : logoImageLight;
  console.log('imagePath:', imagePath.src); 
  return (
    <img
      class="w-24 md:w-32"
      src={imagePath.src}
      alt="Logomark"
  
      {...props}
    />
  );
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}) {
  return (
    <div className={clsx('group/logo', className)}>
      <Logomark
        invert={invert}
        filled={filled}
      />
    </div>
  );
}
