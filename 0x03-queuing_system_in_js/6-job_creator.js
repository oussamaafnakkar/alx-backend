import { createQueue } from 'kue';

const queue = createQueue();

const notif = {
  phoneNumber: '0666666666',
  message: 'welcome',
};

const jobCreate = queue.create('push_notification_code', notif).save((err) => {
  if (!err) console.log(`Notification job created: ${jobCreate.id}`);
});

jobCreate.on('complete', () => {
  console.log('Notification job completed');
});

jobCreate.on('failed', () => {
  console.log('Notification job failed');
});

