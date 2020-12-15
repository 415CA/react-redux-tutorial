import { STORY_ARCHIVE } from '../../constants';

const doArchiveStory = id => ({
  type: STORY_ARCHIVE,
  id,
});

export { doArchiveStory }; 