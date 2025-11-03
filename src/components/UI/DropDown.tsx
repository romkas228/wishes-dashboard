export interface DropdownOption<T extends string> {
  title: string;
  value: T;
}

interface Props<T extends string> {
  label: string;
  value: T;
  options: DropdownOption<T>[];
  className?: string;
  onChange: (value: T) => void;
}

export function DropDown<T extends string>({
  label,
  value,
  options,
  className,
  onChange,
}: Props<T>) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label className="text-sm text-gray-500 whitespace-nowrap">{label}</label>

      <select
        value={value}
        onChange={(event) => {
          onChange(event.target.value as T);
        }}
        className="w-auto sm:w-40  border rounded-md px-2 py-1 focus:border-0focus:border-transparent focus:ring-0 focus:outline-none"
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
}
