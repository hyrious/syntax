# @hyrious/syntax

Experimental syntax highlighting library.

Also checkout [Shiki](https://shiki.matsu.io/).

## Usage

```ts
import { render } from "@hyrious/syntax";

const html = render("ruby", 'puts "some ruby code"');
// <code>
//   <span class="id call">puts</span>
//   <span class="str">"some ruby code"</span>
// </code>
```

## License

MIT @ [hyrious](https://github.com/hyrious)
