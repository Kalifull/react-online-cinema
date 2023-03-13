import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export type TButton = ButtonHTMLAttributes<HTMLButtonElement>;

export interface IFieldProps {
  placeholder: string;
  error?: FieldError | any;
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps;

export type TField = TypeInputPropsField;
