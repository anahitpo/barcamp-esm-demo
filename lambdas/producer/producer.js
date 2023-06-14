const { sendRecordsWithRetries } = require('./kinesisFailures')

const generateKeys = (count) => [...Array(count).keys()].map((key) => key.toString())

exports.handler = async (event) => {
  const { recordCount, batchCount } = event
  if (!recordCount) {
    throw new Error('Event is missing required parameter(s)!')
  }

  const partitionKeys = generateKeys(recordCount)
  await sendRecordsWithRetries(partitionKeys, batchCount)
}
