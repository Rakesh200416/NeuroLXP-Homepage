import { Worker, Job } from "bullmq";
import Redis from "ioredis";

const connection = new Redis({
  host: process.env.REDIS_HOST || "localhost",
  port: Number(process.env.REDIS_PORT || 6379),
  maxRetriesPerRequest: null,
});

export function startOtpWorker() {
  return new Worker(
    "otp-queue",
    async (job: Job) => {
      const { channel, target, otp, purpose } = job.data as {
        channel: "email" | "mobile";
        target: string;
        otp: string;
        purpose: string;
      };

      if (channel === "email") {
        console.log(`[EMAIL OTP] purpose=${purpose} target=${target} otp=${otp}`);
      } else {
        console.log(`[SMS OTP] purpose=${purpose} target=${target} otp=${otp}`);
      }

      return true;
    },
    { connection }
  );
}