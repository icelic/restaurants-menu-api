import { EntitySchema } from 'typeorm';
import { Restaurant } from '../model/Restaurant';
import { Menu } from '../model/Menu';

module.exports = new EntitySchema({
  name: 'Restaurant',
  target: Restaurant,
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    name: {
      type: 'varchar',
    },
  },
  relations: {
    menus: {
      target: Menu,
      type: 'many-to-many',
      joinTable: true,
      cascade: true,
    },
  },
});
