import { TypeWithKey } from '@/models/TypeWithKey.model';
import { Psycopath } from '@/models/psycopath/psycopath.models';

const adapterPsycopath = (
  data: TypeWithKey<string>,
  img_url: string
): Psycopath => {
  return {
    name: data?.psycopath_name,
    range: data?.psycopath_range,
    status: data?.psycopath_status,
    url_image: img_url,
  };
};

export { adapterPsycopath };
