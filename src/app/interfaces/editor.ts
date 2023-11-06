export interface Editor {
  title: string;
  tags: Array<string>;
  description: string;
  date: string;
  id: string;
  image: string;
}

/* use typescript pick and omit lin imolementattion later
 e.g const Tags = ({{ tags }}: Pick<Editor, 'tags'>) => ; {
 return (
  <style> {{tags.map((tag) => (
    <span key={`tag-${tag}`}>{tag}</span>
  ))}} </style>
  );
  );

*/
// Use FCC for ref
