# 1 Tabs Example

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="java" label="Java" default>
    This is a **Java** example.
    ```java {1} title='Java example'
    class Example {
        public static void main(String[] args) {
            System.out.println("Hello");
        }
    }
    ```
  </TabItem>
  <TabItem value="javascript" label="JS">
    This is **Javascript** example.
  </TabItem>
  <TabItem value="go" label="Go">
    This is **Go** example.

  </TabItem>
</Tabs>

## References
More details on pages can be found [here](https://docusaurus.io/docs/markdown-features/tabs).