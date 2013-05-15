require 'aws-sdk'

AWS.config(access_key_id: ENV['OWDNA_ACCESS_KEY_ID'], secret_access_key: ENV['OWDNA_SECRET_ACCESS_KEY'])
s3 = AWS::S3.new
bucket = s3.buckets['www.owdna.org']

filelist = Dir['old/**/*'].reject { |f| File.directory?(f) }
filelist.each do |f|
  fn = f[4..f.length]
  puts "uploading #{fn}..."
  bucket.objects[fn].write(Pathname.new(f))
  bucket.objects[fn].acl = :public_read
end
puts "done."