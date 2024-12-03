import { useDispatch, useSelector } from "react-redux"
import RelatedVideoListItem from "./RelatedVideoListItem"
import { useEffect } from "react";
import { fatchRelatedVideos } from "../../features/relatedVideos/relatedVideosSlice";
import Loading from "../ui/Loading";

const RelatedVideoList = ({ currentVideoId, tags }) => {
  const dispatch = useDispatch();
  const { relatedVideos, isLoading, isError, error } = useSelector((state) => state.relatedVideos);

  useEffect(() => {
    if (tags && currentVideoId) {
      dispatch(fatchRelatedVideos({ tags, id: currentVideoId }));
    }
  }, [dispatch, tags, currentVideoId]);

  // Decide what to render
  let content = null;

  if (isLoading) {
    content = <Loading />;
  } else if (isError) {
    content = <div className="col-span-12">{error || "An error occurred!"}</div>;
  } else if (!isError && relatedVideos.length === 0) {
    content = <div className="col-span-12">No related videos found!</div>;
  } else if (!isError && relatedVideos.length > 0) {
    content = relatedVideos.map((video) => (
      <RelatedVideoListItem key={video.id} video={video} />
    ));
  }

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {content}
    </div>
  );
};

export default RelatedVideoList;
