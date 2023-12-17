import { Component } from '@angular/core';
import { MatTreeModule } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';

interface PlantNode {
  name: string;
  child?: PlantNode[];
}

interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

const TREE_DATA: PlantNode[] = [
  {
    name: 'Fruit',
    child: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Fruit loops' }],
  },

  {
    name: 'Vegetables',

    child: [
      {
        name: 'Green',

        child: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
      },

      {
        name: 'Orange',

        child: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
      },
    ],
  },
];

@Component({
  selector: 'app-hierarchy',
  templateUrl: './hierarchy.component.html',
  styleUrl: './hierarchy.component.css',
  //imports: [MatTreeModule, MatIconModule],
})
export class HierarchyComponent {
  // private _transformer = (node: PlantNode, level: number) => {
  //   return {
  //     expandable: !!node.child && node.child.length > 0,
  //     name: node.name,
  //     level: level,
  //   };
  //   constructor() {
  //     this.dataSource.data = TREE_DATA;
  //   }
  
  //   treeControl = new FlatTreeControl<FlatNode>(
  //     (node) => node.level,
  //     (node) => node.expandable
  //   );
  
  //   treeFlattener = new MatTreeFlattener(
  //     this._transformer,
  //     (node) => node.level,
  //     (node) => node.expandable,
  //     (node) => node.child
  //   );
  
  //   dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  
  //   hasChild = (_: number, node: FlatNode) => node.expandable;

}
