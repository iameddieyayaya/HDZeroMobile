import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry, Layout} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {default as theme} from './theme.json'; // <-- Import app theme
import {default as mapping} from './mapping.json'; // <-- Import app mapping
import MainNavigator from './MainNavigator';

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />

    <ApplicationProvider
      {...eva}
      theme={{...eva.dark, ...theme}}
      customMapping={mapping}>
      <MainNavigator />
    </ApplicationProvider>
  </>
);
