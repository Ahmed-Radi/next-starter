import { Card, CardBody } from "@nextui-org/react";
import { IconFileUnknown } from "@tabler/icons-react";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <Card className="mx-auto mt-4 max-w-md">
      <CardBody>
        <p className="flex items-center justify-center gap-2 text-2xl">
          <IconFileUnknown />
          Not found <b>404</b>
        </p>
      </CardBody>
    </Card>
  );
};

export default NotFound;
