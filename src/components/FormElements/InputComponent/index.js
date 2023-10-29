export default function InputComponent({
    label,
    placeholder,
    onChange,
    value,
    type,
  }) {
    return (
      <div className="relative">
        <p className=" pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white">
          {label}
        </p>
        <input
                
                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 input-box"
                placeholder={placeholder}
          type={type || "text"}
          value={value}
          onChange={onChange}
                />
      </div>
    );
  }
  