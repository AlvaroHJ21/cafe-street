import { cn } from '@/lib/utils';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'text' | 'outlined';
}

export default function Button(props: Props) {
  const { className, variant = 'filled', ...restProps } = props;
  return (
    <button
      className={cn(
        'py-3 px-8 rounded-full flex gap-2',
        variant === 'filled' && 'bg-secondary text-white',
        variant === 'text' && 'text-primary',
        variant === 'outlined' && 'border-2 border-primary text-primary',
        className
      )}
      {...restProps}
    />
  );
}
