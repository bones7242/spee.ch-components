import { rootSaga } from './rootSaga';
import { watchHandleShowPageUri } from './show_uri';
import { watchNewAssetRequest } from './show_asset';
import { watchNewChannelRequest, watchUpdateChannelClaims } from './show_channel';
import { watchFileIsRequested } from './file';
import { watchPublishStart } from './publish';

export default {
  rootSaga,
  watchHandleShowPageUri,
  watchNewAssetRequest,
  watchNewChannelRequest,
  watchUpdateChannelClaims,
  watchFileIsRequested,
  watchPublishStart
}
