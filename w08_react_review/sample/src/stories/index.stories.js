import React from 'react';
import {storiesOf} from '@storybook/react';

import Todo from '../components/Todo';
import TodoList from '../components/TodoList';

storiesOf('Test',module).add('random h1 tag', () => <h1>Random Tag</h1>);

storiesOf('Todo',module).add('Todo', () => <Todo description="description goes here"/>);

storiesOf('Todo',module).add('TodoList', () => <TodoList list={[]}/>);