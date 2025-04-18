---
slug: /operators
---
# Test Multiple Sidebars


Testing multiple sidebars.

Check [this](https://docusaurus.io/docs/sidebar/multiple-sidebars#sidebar-association) on details for associating sidebars.

In a nutshell, when you click on a doc which is defined in another sidebar, then all the links of that sidebar will be shown.
Basically, doc belonging to a particular sidebar will show their respective sidebar.

Now, we will use this above rule to achieve the functionality of under `Tutorial` nav tab - show `tutorialSidebar` 
and under `Operators` nav tab - show `mySidebar2`, then first you should not use autogenerated links for docs and categories in `sidebar.js` configuration.
Define each docs and category explicitly and make nav bar `Operators` to point to any doc of mySidebar2 in `docusaurus.config.js` then `Operators`
tab will show `mySidebar2`.

:::warning What will happen if we use autogenerated links ?

If you use, autogenerated links, for example, say in `tutorialSidebar` in `sidebar.js`,
then, this sidebar will also show `Operators` related links, which is not desirable.

:::