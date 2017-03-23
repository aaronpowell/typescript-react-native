import { Input, Item } from 'native-base';
import * as React from 'react';

export interface IInputProps {
  placeholder: string;
}

const InputComponent: React.StatelessComponent<IInputProps> = ({ placeholder }) => {
  return (
    <Item>
      <Input placeholder={placeholder} />
    </Item>
  );
};

export default InputComponent;
