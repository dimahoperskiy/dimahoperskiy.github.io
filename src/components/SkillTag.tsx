import React, { ReactElement } from 'react';
import { Tag } from 'antd';
import { Skill } from '../types/common';

const SkillTag: React.FC<Skill & { bigSize?: boolean }> = (
  props: Skill & { bigSize?: boolean },
) => {
  const { label, icon, color, bigSize = false } = props;
  return (
    <Tag
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        fontSize: bigSize ? '18px' : '14px',
        padding: bigSize ? '4px 12px' : '0 7px',
      }}
      key={label}
      icon={icon}
      color={color}
    >
      {label}
    </Tag>
  );
};

export default SkillTag;
