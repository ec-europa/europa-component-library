# ECL Grid

Use a grid to give your design a basic underlying structure. By placing your
design elements on the invisible lines of a grid, you will create a more
structured and coherent composition.

The ECL Grid uses Bootstrap v4's grid. Designs are based on the 12-column
Bootstrap grid system.

We use 5 breakpoints, of which 3 of them are native to Bootstrap.

| Layout      | Widths             | Media queries              |
| ----------- | ------------------ | -------------------------- |
| Extra small | Any                |                            |
| Small       | Bigger than 479px  | @media (min-width: 480px)  |
| Medium      | Bigger than 767px  | @media (min-width: 768px)  |
| Large       | Bigger than 991px  | @media (min-width: 992px)  |
| Extra large | Bigger than 1199px | @media (min-width: 1200px) |

Bootstrap includes a responsive, mobile first fluid grid system that
appropriately scales up to 12 columns as the device or viewport size increases.

It includes predefined classes for easy layout options, as well as powerful
mixins for generating more semantic layouts.

Refer to
[Bootstrap documentation](http://v4-alpha.getbootstrap.com/layout/grid/) for
understanding the general concepts. When using the grid of ECL, use `.ecl-`
namespace in front of Bootstrap's classes in order to avoid collisions.
