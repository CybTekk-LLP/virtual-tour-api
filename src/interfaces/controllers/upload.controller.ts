import { ACCOUNT_NAME, SAS_TOKEN, CONTAINER_NAME } from "@/config";
import { BlobServiceClient } from "@azure/storage-blob";
import { Request, Response } from "express";
import fs from "fs";

export class UploadsController {
  handleNewImageUpload = async (req: Request, res: Response) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (!req.file) throw new Error("400::no file attached");

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const blobName = req.file.filename;

    const blobServiceClient = new BlobServiceClient(
      `https://${ACCOUNT_NAME}.blob.core.windows.net/?${SAS_TOKEN}`
    );

    const containerClient =
      blobServiceClient.getContainerClient(CONTAINER_NAME);

    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const fileStream = fs.createReadStream(req.file.path);
    await blockBlobClient.uploadStream(
      fileStream,
      undefined,
      undefined,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      { blobHTTPHeaders: { blobContentType: req.file.mimeType } }
    );
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    res.json({ uri: `/api/uploads/images/${req.file.filename}` });
  };
}
