import { Psycopath } from '@/models/psycopath/psycopath.models';

const adapterPsycopath = (data: any, img_url: string): Psycopath => {
  return {
    name: data?.psycopath_name,
    range: data?.psycopath_range,
    status: data?.psycopath_status,
    url_image: img_url,
  };
};

export { adapterPsycopath };
