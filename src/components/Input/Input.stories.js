import React from 'react';
import Input from './Input';
import './Input.css';

export default{
    title: 'Form/Input',
    component: Input
}
 
export const Regular = () => <Input size = 'regular' placeholder = 'Regular' />
export const Large = () => <Input size = 'large' placeholder = 'large' />
export const Medium = () => <Input size = 'medium' placeholder = 'Medium' />
export const Small = () => <Input size = 'small' placeholder = 'Small' />

Large.storyName = 'Large Input';
Small.storyName = "Small Input"
