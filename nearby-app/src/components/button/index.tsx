import React from 'react';
import {
  TouchableOpacityProps,
  TextProps,
  ActivityIndicator,
} from 'react-native';
import { IconProps as TablerIconProps } from '@tabler/icons-react-native';
import { colors } from '@/styles/theme';
import * as S from './style';

type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean;
};

type ButtonComponent = React.FC<ButtonProps> & {
  Title: React.FC<TextProps>;
  Icon: React.FC<IconProps>;
};

const Button: ButtonComponent = ({
  children,
  style,
  isLoading = false,
  ...rest
}) => {
  return (
    <S.ContainerButton
      style={style}
      activeOpacity={0.8}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator color={colors.gray[100]} size={'small'} />
      ) : (
        children
      )}
    </S.ContainerButton>
  );
};

type IconProps = {
  icon: React.ComponentType<TablerIconProps>;
};

const Icon = ({ icon: Icon }: IconProps) => {
  return <Icon size={24} color={colors.gray[100]} />;
};

const Title = ({ children }: TextProps) => {
  return <S.TitleButton>{children}</S.TitleButton>;
};

Button.Title = Title;
Button.Icon = Icon;

export default Button;
