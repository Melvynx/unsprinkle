import React from 'react';
import styled from 'styled-components/macro';

function getSource(src) {
  const avifSource = src.replace('.jpg', '.avif');

  return {
    avif: {
      base: avifSource,
      x2: avifSource.replace('.', '@2x.'),
      x3: avifSource.replace('.', '@3x.'),
    },
    jpg: {
      base: src,
      x2: src.replace('.', '@2x.'),
      x3: src.replace('.', '@3x.'),
    },
  };
}

const PhotoGridItem = ({ id, src, alt, tags }) => {
  const generatedSource = getSource(src);

  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source
            type="image/avif"
            srcset={`
      ${generatedSource.avif.base} 1x,
      ${generatedSource.avif.x2} 2x,
      ${generatedSource.avif.x3} 3x
    `}
          />
          <source
            type="image/jpg"
            srcset={`
      ${generatedSource.jpg.base} 1x,
      ${generatedSource.jpg.x2} 2x,
      ${generatedSource.jpg.x3} 3x
    `}
          />
          <Image alt={tags.join(', ')} src={src} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
`;

const Tags = styled.ul`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding: 4px 0;
`;

const Tag = styled.li`
  display: inline;
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);

  &:not(:last-of-type) {
    margin-right: 8px;
  }
`;

// const Tags = styled.ul`
//   overflow: hidden;
//   text-overflow: ellipsis;
//   white-space: nowrap;
//   padding: 4px 0;
// `;

// const Tag = styled.li`
//   display: inline;
//   padding: 4px 8px;
//   background: var(--color-gray-300);
//   font-size: 0.875rem;
//   font-weight: 475;
//   color: var(--color-gray-800);
//   &:not(:last-of-type) {
//     margin-right: 8px;
//   }
// `;

export default PhotoGridItem;
