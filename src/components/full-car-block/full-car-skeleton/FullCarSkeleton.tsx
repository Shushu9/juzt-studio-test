import ContentLoader from 'react-content-loader';

const FullCarSkeleton = () => (
    <ContentLoader
        speed={2}
        width={1200}
        height={590}
        viewBox="0 0 1200 590"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="400" cy="302" r="260" />
        <rect x="900" y="200" rx="3" ry="3" width="250" height="16" />
        <rect x="900" y="235" rx="3" ry="3" width="250" height="16" />
        <rect x="900" y="265" rx="3" ry="3" width="250" height="16" />
        <rect x="900" y="295" rx="3" ry="3" width="250" height="16" />
        <rect x="900" y="329" rx="3" ry="3" width="250" height="16" />
        <rect x="900" y="367" rx="3" ry="3" width="78" height="38" />
    </ContentLoader>
);

export default FullCarSkeleton;
