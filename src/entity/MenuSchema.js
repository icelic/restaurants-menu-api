import { EntitySchema } from 'typeorm';
import { Menu } from '../model/Menu';

module.exports = new EntitySchema({
  name: 'Menu',
  target: Menu,
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    title: {
      type: 'varchar',
    },
  },
});
