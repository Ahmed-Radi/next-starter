import { Button, Card, CardBody } from "@nextui-org/react";

export default function Home() {
  return (
    <Card className="mx-auto mt-4 max-w-md">
      <CardBody className="text-center">
        <h1 className="text-5xl">Welcome to the Next.js Starter</h1>
        <p className="mt-3 text-xl">
          This is a starter template for Next.js with NextUI and Tailwind CSS.
        </p>
        <p className="mt-3 text-xl">
          You can start editing this page by modifying{" "}
          <code>src/app/page.tsx</code>.
        </p>
        <Button color="primary">Get Started</Button>
      </CardBody>
    </Card>
  );
}
