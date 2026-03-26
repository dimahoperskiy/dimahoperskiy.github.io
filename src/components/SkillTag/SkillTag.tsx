import React from 'react';
import { Skill } from '../types/common';
import { StyledTag } from './SkillTag.styles';

const SkillTag: React.FC<Skill & { bigSize?: boolean }> = (
  props: Skill & { bigSize?: boolean },
) => {
  const { label, icon, color, bigSize = false } = props;
  return (
    <StyledTag $bigSize={bigSize} icon={icon} color={color}>
      {label}
    </StyledTag>
  );
};

export default SkillTag;
