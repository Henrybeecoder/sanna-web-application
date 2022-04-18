import React from "react";
import "./style.css";
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  adornment?: any;
  label?: string;
  onAdornmentClick?: () => void;
  adornmentAlt?: string;
  error?: string | null;
  styleName?: string;
  notify?: string;
}

export const Input = ({
  adornment,
  label,
  onAdornmentClick,
  adornmentAlt,
  error,
  notify,
  styleName,
  ...props
}: InputProps) => {
  return (
    <div className={styleName}>
      <label id={`label-${props.name}`} htmlFor={props.name}>
        {label}
      </label>
      <div>
        <input
          {...props}
          className={
            error
              ? `"input error ${props.className}`
              : `"input" ${props.className}`
          }
          aria-labelledby={`label-${props.name}`}
        />
        {adornment && (
          <div className="adorm">
            <img
              src={adornment}
              height="15px"
              width="15px"
              alt={adornmentAlt}
              onClick={onAdornmentClick}
            />
          </div>
        )}
      </div>

      {error !== null && <small className="small">{error}</small>}
      {notify && <small>{notify}</small>}
    </div>
  );
};

export default Input;
