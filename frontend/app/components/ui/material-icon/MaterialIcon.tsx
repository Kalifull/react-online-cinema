import { memo } from 'react';
import * as MaterialIcons from 'react-icons/md';

import { TypeMaterialIconName } from '@/shared/types/icon.types';

const MaterialIcon: React.FC<{ name: TypeMaterialIconName }> = memo(({ name }) => {
  const IconComponent = MaterialIcons[name] || MaterialIcons.MdDragIndicator;

  return <IconComponent />;
});

export default MaterialIcon;
