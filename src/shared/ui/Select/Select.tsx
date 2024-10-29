import { ChangeEvent, memo, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  readonly?: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: string) => void;
}

export const Select = memo((props: SelectProps) => {
  const {
    className,
    label,
    options,
    value,
    readonly,
    onChange,
  } = props;

  const optionsList = useMemo(() => options?.map((opt) => (
    <option
      key={opt.value}
      className={cls.option}
      value={opt.value}
    >
      {opt.content}
    </option>
  )), [options]);

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  const mods: Mods = {};
  return (
    <div className={classNames(cls.Wrapper, mods, [className])}>
      {label && (
        <span className={cls.label}>
          {`${label}>`}
        </span>
      )}
      <select
        className={cls.select}
        value={value}
        onChange={handleOnChange}
        disabled={readonly}
      >
        {optionsList}
      </select>
    </div>
  );
});
