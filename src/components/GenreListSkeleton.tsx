import { Skeleton, Stack } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <Stack>
      <Skeleton height="20px" borderRadius="6px" m="2" />
    </Stack>
  );
};

export default GenreListSkeleton;
