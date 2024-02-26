import React from 'react';
import { Badge } from './CardBadage.style';

export const CardBadage = ({ $type }) => {
  return <Badge $type={$type}>{$type}</Badge>;
};
